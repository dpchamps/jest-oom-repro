
  describe("some-evil-spec=256", () => {
    it("evil-block-256", () => {
      window.evil_256 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  