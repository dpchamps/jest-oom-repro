
  describe("some-evil-spec=931", () => {
    it("evil-block-931", () => {
      window.evil_931 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  