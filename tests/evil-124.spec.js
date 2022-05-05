
  describe("some-evil-spec=124", () => {
    it("evil-block-124", () => {
      window.evil_124 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  