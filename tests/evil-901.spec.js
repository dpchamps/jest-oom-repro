
  describe("some-evil-spec=901", () => {
    it("evil-block-901", () => {
      window.evil_901 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  