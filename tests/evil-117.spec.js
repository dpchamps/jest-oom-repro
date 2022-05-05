
  describe("some-evil-spec=117", () => {
    it("evil-block-117", () => {
      window.evil_117 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  