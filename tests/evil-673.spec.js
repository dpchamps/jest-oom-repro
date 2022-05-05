
  describe("some-evil-spec=673", () => {
    it("evil-block-673", () => {
      window.evil_673 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  