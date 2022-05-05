
  describe("some-evil-spec=975", () => {
    it("evil-block-975", () => {
      window.evil_975 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  