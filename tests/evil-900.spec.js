
  describe("some-evil-spec=900", () => {
    it("evil-block-900", () => {
      window.evil_900 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  