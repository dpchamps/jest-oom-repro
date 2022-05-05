
  describe("some-evil-spec=242", () => {
    it("evil-block-242", () => {
      window.evil_242 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  