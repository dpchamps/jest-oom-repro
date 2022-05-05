
  describe("some-evil-spec=989", () => {
    it("evil-block-989", () => {
      window.evil_989 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  