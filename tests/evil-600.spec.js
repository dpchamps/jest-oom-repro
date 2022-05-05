
  describe("some-evil-spec=600", () => {
    it("evil-block-600", () => {
      window.evil_600 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  