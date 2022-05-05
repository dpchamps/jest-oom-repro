
  describe("some-evil-spec=795", () => {
    it("evil-block-795", () => {
      window.evil_795 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  