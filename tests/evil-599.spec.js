
  describe("some-evil-spec=599", () => {
    it("evil-block-599", () => {
      window.evil_599 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  