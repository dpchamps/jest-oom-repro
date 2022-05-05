
  describe("some-evil-spec=120", () => {
    it("evil-block-120", () => {
      window.evil_120 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  