
  describe("some-evil-spec=61", () => {
    it("evil-block-61", () => {
      window.evil_61 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  