
  describe("some-evil-spec=529", () => {
    it("evil-block-529", () => {
      window.evil_529 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  