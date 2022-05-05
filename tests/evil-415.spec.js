
  describe("some-evil-spec=415", () => {
    it("evil-block-415", () => {
      window.evil_415 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  