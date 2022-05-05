
  describe("some-evil-spec=97", () => {
    it("evil-block-97", () => {
      window.evil_97 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  