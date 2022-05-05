
  describe("some-evil-spec=271", () => {
    it("evil-block-271", () => {
      window.evil_271 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  