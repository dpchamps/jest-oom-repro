
  describe("some-evil-spec=880", () => {
    it("evil-block-880", () => {
      window.evil_880 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  