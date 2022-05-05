
  describe("some-evil-spec=32", () => {
    it("evil-block-32", () => {
      window.evil_32 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  