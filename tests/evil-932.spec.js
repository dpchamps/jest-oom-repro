
  describe("some-evil-spec=932", () => {
    it("evil-block-932", () => {
      window.evil_932 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  