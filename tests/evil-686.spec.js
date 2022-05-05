
  describe("some-evil-spec=686", () => {
    it("evil-block-686", () => {
      window.evil_686 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  